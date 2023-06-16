import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { HomePage } from "../../pages/home/home";
import { LoginPage } from "../../pages/login/login";
import { ProfilePage } from "../../pages/profile/profile";
import { RegisterPage } from "../../pages/register/register";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { FeedPage } from "../../pages/feed/feed";
import { AppHeader } from "../app-header/app-header";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { ProfileUser } from "../../pages/profile/profile-user/profile-user";
import { ProfileOrders } from "../../pages/profile/profile-orders/profile-orders";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { Modal } from "../modal/modal";
import { useEffect } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { checkUserAuth } from "../../services/actions/user";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { IngredientDetails } from "../burger-ingredients/ingredient-details/ingredient-details";
import { loadIngredients } from "../../services/actions/burger-ingredients";
import { ROUTES } from "../../utils/constant";
import { OrderPage } from "../../pages/order/order";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigationType = useNavigationType();
  const state = location.state;

  useEffect(() => {
    dispatch(loadIngredients());
    dispatch(checkUserAuth());
  }, []);

  return (
    <>
      <AppHeader />
      <Routes location={state?.backgroundLocation || location}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route
          path={ROUTES.LOGIN}
          element={<OnlyUnAuth component={<LoginPage />} />}
        />
        <Route
          path={ROUTES.REGISTER}
          element={<OnlyUnAuth component={<RegisterPage />} />}
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
        />
        <Route
          path={ROUTES.RESET_PASSWORD}
          element={<OnlyUnAuth component={<ResetPasswordPage />} />}
        />
        <Route path={ROUTES.FEED} element={<FeedPage />} />
        <Route
          path={ROUTES.PROFILE}
          element={<OnlyAuth component={<ProfilePage />} />}
        >
          <Route index element={<OnlyAuth component={<ProfileUser />} />} />
          <Route
            path={ROUTES.ORDERS}
            element={<OnlyAuth component={<ProfileOrders />} />}
          />
        </Route>
        <Route
          path={ROUTES.INGREDIENT}
          element={
            <div className="pt-20">
              <IngredientDetails heading="center" />
            </div>
          }
        />
        {navigationType === "PUSH" ? (
          <Route
            path={ROUTES.FEED_ORDERS}
            element={
              <Modal>
                <OrderPage />
              </Modal>
            }
          />
        ) : (
          <Route path={ROUTES.FEED_ORDERS} element={<OrderPage />} />
        )}
        {navigationType === "PUSH" ? (
          <Route
            path={ROUTES.PROFILE_ORDERS}
            element={
              <Modal>
                <OrderPage />
              </Modal>
            }
          />
        ) : (
          <Route
            path={ROUTES.PROFILE_ORDERS}
            element={<OnlyAuth component={<OrderPage />} />}
          />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route
            path={ROUTES.INGREDIENT}
            element={
              <Modal>
                <IngredientDetails heading="start" />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
