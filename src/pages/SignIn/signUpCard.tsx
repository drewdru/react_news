import React from "react";
import { useAppDispatch } from "redux/store";
import { RootState } from "redux/reducers";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel, Card, Form } from "react-bootstrap";
import { ShadowCard, AnimatedAlert } from "components";
import { signup } from "redux/slices/auth";
import { signupSchema } from "./schema"

const SignUpCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const message = useSelector(
    (state: RootState) => state.rootReducer.message.message
  );
  const [successful, setSuccessful] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  
  const onSignUp = async (data) => {
    setSuccessful(false);
    try {
      await dispatch(signup(data)).unwrap();
      setSuccessful(true);
      reset();
    } catch (error) {
      setSuccessful(false);
    }
  };

  return (
    <ShadowCard>
      <Card.Body>
        <Card.Title className="text-center"><h3>{t("auth.SignUp")}</h3></Card.Title>
        <Card.Text className="text-center">
          {t("auth.NotRegisteredYet")}{" "}
          <Link to="/react_news/auth/signin">{t("auth.SignIn")}</Link>
        </Card.Text>
        <Form onSubmit={handleSubmit(onSignUp)}>
          <FormGroup>
            <FormLabel>{t("auth.EmailAddress")}</FormLabel>
            {errors.email?.message ? (
              <AnimatedAlert variant="danger"><span>{errors.email?.message}</span></AnimatedAlert>
            ) : <></>}
            <FormControl
              {...register("email")}
              required
              type="email"
              placeholder={t("auth.EnterEmail")}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>{t("auth.Password")}</FormLabel>
            {errors.password?.message ? (
              <AnimatedAlert variant="danger"><span>{errors.password?.message}</span></AnimatedAlert>
            ) : <></>}
            <FormControl
              {...register("password")}
              required
              type="password"
              placeholder={t("auth.EnterPassword")}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>{t("auth.ConfirmPassword")}</FormLabel>
            {errors.passwordConfirmation?.message ? (
              <AnimatedAlert variant="danger"><span>{errors.passwordConfirmation?.message}</span></AnimatedAlert>
            ) : <></>}
            <FormControl
              {...register("passwordConfirmation")}
              required
              type="password"
              placeholder={t("auth.EnterPassword")}
            />
          </FormGroup>
          <FormGroup>
            {message ? (
              <AnimatedAlert variant={successful ? "success" : "danger"}><span>{message}</span></AnimatedAlert>
            ) : <></>}
          </FormGroup>
          <FormGroup>
            <Button type="submit">{t("form.Submit")}</Button>
          </FormGroup>
        </Form>
      </Card.Body>
    </ShadowCard>
  )
};

export default SignUpCard;
