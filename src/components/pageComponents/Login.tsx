import { FormLayout, TextField } from "@shopify/polaris";
import { Card, Text } from "@shopify/polaris";
import React from "react";

function Login() {
  return (
    <Card>
      <FormLayout>
        <TextField label="Store name" onChange={() => {}} autoComplete="off" />
        <TextField
          type="email"
          label="Account email"
          onChange={() => {}}
          autoComplete="email"
        />
      </FormLayout>
    </Card>
  );
}

export default Login;
