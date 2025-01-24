import { ReactNode } from "react";

const AuthTemplate = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default AuthTemplate;
