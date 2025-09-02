import React from "react";

const UserContext = React.createContext();

export default UserContext;

{/* <UserContext>
  <Login/>
  <Card>
    <Data/>
  </Card>
</UserContext> */}

//wrapping under <UserContext> </UserContext> to make it a provider and under this every component will have access to the global UserContext
