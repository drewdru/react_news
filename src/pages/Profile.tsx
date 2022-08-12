import React from "react";
import { useTranslation } from "react-i18next";
import { RootState } from "redux/reducers";
import { useSelector } from "react-redux";
import { FormGroup, FormControl, FormLabel, Card, Form } from "react-bootstrap";
import { ShadowCard, MainContainer } from "components";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const auth = useSelector(
    (state: RootState) => state.rootReducer.auth
  );

  const [checkedGender, setCheckedGender] = React.useState(auth.user.gender);
  const handleChangeGender = React.useCallback((event) => {
    setCheckedGender(event.target.value);
  }, [setCheckedGender]);
  
  return (
    <MainContainer>
      <ShadowCard>
        <Card.Body>
          <Card.Title className="text-center"><h3>{auth.user.email}</h3></Card.Title>
          <Form>
            <FormGroup>
              <FormLabel>{t("auth.Token")}</FormLabel>
              <FormControl
                required
                type="text"
                defaultValue={auth.token}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>{t("auth.RefreshToken")}</FormLabel>
              <FormControl
                required
                type="text"
                defaultValue={auth.refreshToken}
                disabled
              />
            </FormGroup>
            <FormGroup controlId="gender">
              <FormLabel>{t("user.Gender")}</FormLabel>
              <Form.Row className="ml-0">
                <Form.Check 
                  type="radio"
                  value="male"
                  label={t("user.Male")}
                  onChange={handleChangeGender}
                  checked={checkedGender === "male"}
                />
                <Form.Check 
                  type="radio"
                  value="female"
                  label={t("user.Female")}
                  onChange={handleChangeGender}
                  className="ml-1"
                  checked={checkedGender === "female"}
                />
                <Form.Check 
                  type="radio"
                  value="other"
                  label={t("user.Other")}
                  onChange={handleChangeGender}
                  className="ml-1"
                  checked={checkedGender === "other"}
                />
              </Form.Row>
            </FormGroup>
            <FormGroup>
              <FormLabel>{t("user.FirstName")}</FormLabel>
              <FormControl
                required
                type="text"
                defaultValue={auth.user.firstName}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>{t("user.LastName")}</FormLabel>
              <FormControl
                required
                type="text"
                defaultValue={auth.user.lastName}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>{t("user.Username")}</FormLabel>
              <FormControl
                required
                type="text"
                defaultValue={auth.user.username}
              />
            </FormGroup>
          </Form>
        </Card.Body>
      </ShadowCard>
    </MainContainer>
  );
};

export default Home;
