import { useState } from "react";
import Input from "../../../../components/Input/Input";
import "./AccountDetails.scss";
import Select from "../../../../components/Select/Select";
import { Option } from "../../../../components/Select/types";
import { timezones } from "../../../../utils/timezones";
import { countries } from "../../../../utils/countries";

const languageOptions = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
];

const timeFormatOptions = [
  { label: "24h", value: "24" },
  { label: "12h", value: "12" },
];

type Timezone = {
  utcOffset: number;
  label: string;
  id: string;
};

type Country = { name: string, code: string };

const timeZoneOptions = timezones.map((timezone) => ({
  label: timezone.label,
  value: timezone,
}));

const countryOptions = countries.map((country) => ({
  label: country.name,
  value: country,
}));

const MyAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [timeFormat, setTimeFormat] = useState<Option<string> | undefined>(
    undefined
  );
  const [language, setLanguage] = useState<Option<string> | undefined>(
    undefined
  );
  const [timeZone, setTimeZone] = useState<Option<Timezone> | undefined>(
    undefined
  );
  const [country, setCountry] = useState<Option<Country> | undefined>(
    undefined
  );

  return (
    <div id="account-details">
      <form>
        <div id="account-form-inputs">
          <Input
            label="First Name:"
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />

          <Input
            label="Last Name:"
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />

          <Input
            label="Telephone:"
            type="text"
            value={telephone}
            onChange={(event) => {
              setTelephone(event.target.value);
            }}
          />

          <Input
            label="Email:"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <Input
            label="Email:"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <Select
            label="Language:"
            value={language}
            onChange={(option) => {
              setLanguage(option);
            }}
            options={languageOptions}
          />

          <Select
            label="Time Format:"
            value={timeFormat}
            onChange={(option) => {
              setTimeFormat(option);
            }}
            options={timeFormatOptions}
          />

          <Select
            label="Timezone:"
            value={timeZone}
            onChange={(option) => {
              setTimeZone(option);
            }}
            options={timeZoneOptions}
          />

          <Select
            label="Country:"
            value={country}
            onChange={(option) => {
              setCountry(option);
            }}
            options={countryOptions}
          />
        </div>
      </form>
  </div>
  );
};

export default MyAccount;
