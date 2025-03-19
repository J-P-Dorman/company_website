import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../../../../../redux/features/ui/ui";
import {
  defaultUserData,
  useAuthCheckQuery,
  useInvalidateAuthMutation,
  useUserDataQuery,
} from "../../../../../../redux/services/core/core";
import { RootState } from "../../../../../../redux/store";
import { decodeString } from "../../../../../../utils";
import Spinner from "../../../../../Spinner/Spinner";
import HeaderButton from "../HeaderButton/HeaderButton";
import "./UserButton.scss";
import { Link } from "react-router";
import Button from "../../../../../Button/Button";
import { useState } from "react";
import { clearAuthToken } from "../../../../../../redux/features/authentication/authentication";

const UserButton = () => {
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(false);

  // Store data
  // ========================================
  const authToken =
    decodeString(
      useSelector((state: RootState) => state.authentication.token)
    ) ?? "";
  // ==========

  // Api Mutations
  // ========================================
    const [invalidateAuth] = useInvalidateAuthMutation();
  // ==========

  // Api Queries
  // ========================================
  const {
    data: authCheckData,
    isLoading: authCheckLoading
  } = useAuthCheckQuery(authToken);
  const {
    data: userData = defaultUserData,
    isLoading: userDataIsLoading
  } = useUserDataQuery(authToken);
  const isAuthenticated = authCheckData?.authenticated ?? false;
  const { image, name, userType } = userData;
  const isPremium = userType === "premium";
  const isLoading = authCheckLoading || userDataIsLoading;
  // ==========

  return (
    <div
      id="user-button"
      className={`${isAuthenticated ? " authenticated" : ""}${isPremium ? " premium" : ""}${isFocus ? " open" : ""}`}
    >
      <HeaderButton
         onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        onClick={() => {
          if (!isAuthenticated) {
            dispatch(toggleLogin(true));
            return;
          }
        }}
      >
        {!isAuthenticated && <span id="user-login">Log In</span>}

        {isAuthenticated && (
          <div id="user-container">
            <div id="user-image">
              {isLoading && <Spinner />}
              {!isLoading && <img src={image} alt="user image" />}
            </div>

            <div id="user-text">
              <div id="user-name">{name}</div>

              <div id="user-type">
                {isPremium ? "Premium Member" : "Standard Member"}
              </div>
            </div>
          </div>
        )}
      </HeaderButton>

      <div id="user-dropdown">
        <ul>
          <li>
            <Link
              to="/my-account"
              onFocus={() => {
                setIsFocus(true);
              }}
              onBlur={() => {
                setIsFocus(false);
              }}
            >
              My account
            </Link>
          </li>
          <li>
            <Button
              type="button"
              className="btn-clear"
              onFocus={() => {
                setIsFocus(true);
              }}
              onBlur={() => {
                setIsFocus(false);
              }}
              onClick={() => {
                // Optimistically update local logout state
                dispatch(clearAuthToken());

                // Invalidate auth token on back end
                invalidateAuth({ token: authToken });
              }}
            >
              Log out
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserButton;
