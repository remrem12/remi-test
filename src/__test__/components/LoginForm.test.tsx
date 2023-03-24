import { manualMock } from "../matchMedia";
import { render, screen } from "@testing-library/react";
import LoginForm from "../../components/LoginForm";
import "@testing-library/jest-dom";
import { UserContext } from "../../contexts/user";
import { BrowserRouter } from "react-router-dom";

describe("LoginForm", () => {
  const handleLoginMock = jest.fn();
  const handleLogoutMock = jest.fn();

  beforeEach(() => {
    handleLoginMock.mockClear();
    handleLogoutMock.mockClear();
  });

  it("should show the login form when user is not logged in", () => {
    manualMock();
    render(
      <UserContext.Provider
        value={{
          email: "",
          handleLogin: handleLoginMock,
          handleLogout: handleLogoutMock,
        }}
      >
        <LoginForm />
      </UserContext.Provider>
    );

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login/Register")).toBeInTheDocument();
  });

  it("should show the logout button when user is logged in", () => {
    manualMock();
    render(
      <UserContext.Provider
        value={{
          email: "nghia@abc.com",
          handleLogin: handleLoginMock,
          handleLogout: handleLogoutMock,
        }}
      >
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </UserContext.Provider>
    );
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});
