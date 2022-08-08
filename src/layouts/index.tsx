
import { Header, Footer } from "../components";
import { AppContainer, RouteLayout } from "./styled";

export const DefaultLayout: React.FC = ({ children }) => {
    return (
      <AppContainer>
        <Header />
        <RouteLayout>{children}</RouteLayout>
        <Footer />
      </AppContainer>
    );
};
