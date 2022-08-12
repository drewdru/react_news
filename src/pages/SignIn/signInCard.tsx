import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { RootState } from "redux/reducers";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { Button, FormGroup, FormControl, FormLabel, Card, Form } from "react-bootstrap";
import { ShadowCard, AnimatedAlert } from "components";
import { signin } from "redux/slices/auth";
import { clearMessage } from "redux/slices/message";
import { signinSchema } from "./schema"

const SignInCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next");

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
    resolver: yupResolver(signinSchema),
  });

  const onSignIn = async (data) => {
    dispatch(clearMessage())
    setSuccessful(false);
    try {
      await dispatch(signin(data)).unwrap();
      setSuccessful(true);
      reset();
      navigate(next || "/react_news/profile", {replace: true})
    } catch (error) {
      setSuccessful(false);
    }
  };

  return (
    <ShadowCard>
      <Card.Body>
        <Card.Title className="text-center"><h3>{t("auth.SignIn")}</h3></Card.Title>
        <Card.Text className="text-center">
          {t("auth.AlreadyRegistered")}{" "}
          <Link to="/react_news/auth/signup">{t("auth.SignUp")}</Link>
        </Card.Text>
        <Form onSubmit={handleSubmit(onSignIn)}>
          <FormGroup>
            <FormLabel>{t("auth.EmailAddressOrUsername")}</FormLabel>
            {errors.email?.message ? (
              <AnimatedAlert variant="danger"><span>{errors.email?.message}</span></AnimatedAlert>
            ) : <></>}
            <FormControl
              {...register("email")}
              type="text"
              required
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
              type="password"
              required
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

export default SignInCard;
