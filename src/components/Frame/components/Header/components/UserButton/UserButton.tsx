import { useDispatch, useSelector } from "react-redux";

import { updateToken } from "../../../../../../redux/features/authentication/authentication";
import { useAuthCheckQuery, useUserDataQuery } from "../../../../../../redux/services/core/core";
import { RootState } from "../../../../../../redux/store";
import { decodeString } from "../../../../../../utils";
import Spinner from "../../../../../Spinner/Spinner";
import HeaderButton from "../HeaderButton/HeaderButton";
import "./UserButton.scss";

const UserButton = () => {
  const dispatch = useDispatch();

  // Store data
  // ========================================
  const authToken = decodeString(useSelector((state: RootState) => state.authentication.token)) ?? '';
  // ==========

  // Api Data
  // ========================================
  const { data: authCheckData, isLoading: authCheckLoading } = useAuthCheckQuery(authToken, {skip: (authToken === '')});
  const { data: userData, isLoading: userDataIsLoading } = useUserDataQuery(authToken, {skip: (authToken === '')});
  const authenticated = authCheckData?.authenticated ?? false;
  const {image, name, userType} = userData ?? {image: '', name: '-', userType: 'standard'};
  const isPremium = userType === "premium";
  const isLoading = authCheckLoading || userDataIsLoading;
  // ==========

  return (
    <div id="user-button" className={isPremium ? 'premium' : ''}>
      <HeaderButton onClick={() => {
        // TODO: Move this to login form submit
        dispatch(updateToken('bulbasaur'));
      }}>
        {!authenticated && <span id="user-login">Log In</span>}

        {authenticated && (
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
    </div>
  );
};

export default UserButton;
