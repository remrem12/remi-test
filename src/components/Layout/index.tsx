import Header from "../Header";

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
