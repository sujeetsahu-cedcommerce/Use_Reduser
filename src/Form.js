import React, { useCallback, useReducer, useState } from "react";
import "@shopify/polaris/build/esm/styles.css";
import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  Heading,
  Checkbox,
  RadioButton,
  Button,
  Icon,
  Modal,
  TextContainer,
} from "@shopify/polaris";

function Form() {
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);

  const [value, setValue] = useState("disabled");

  const handleChangee = useCallback(
    (_checked, newValue) => setValue(newValue),
    []
  );

  const initialState = {
    title: "",
    description: "",
    handlingTime: "",
    Amazon_Parent_Sku: "",
    barCode: false,
    add_Amazon_Category: "",
    image_Selection: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setData":
        let tempState = { ...state };
        tempState[action.field] = action.payload;
        return { ...tempState };
      default:
        return state;
    }
  };

  const changeHandler = (value, field) => {
    // alert(value);
    // alert(field);

    dispatch({
      type: "setData",
      field: field,
      payload: value,
    });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Page fullWidth breadcrumbs={[{}]}>
      <Layout>
        <Layout.AnnotatedSection
          id="storeDetails"
          title="Title*"
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                type="text"
                // label="Account email"
                onChange={(e) => {
                  changeHandler(e, "title");
                }}
                value={state.title}
                autoComplete="email"
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          id="storeDetails"
          title="Description*"
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                type="text"
                // label="Account email"
                onChange={(e) => {
                  changeHandler(e, "description");
                }}
                value={state.description}
                autoComplete="email"
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          id="storeDetails"
          title="Handling Time*"
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                type="text"
                // label="Account email"
                onChange={(e) => {
                  changeHandler(e, "handlingTime");
                }}
                value={state.handlingTime}
                autoComplete="email"
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          id="storeDetails"
          title="Amazon Parent Sku"
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                type="number"
                onChange={(e) => {
                  changeHandler(e, "Amazon_Parent_Sku");
                }}
                value={state.Amazon_Parent_Sku}
                autoComplete="email"
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          id="storeDetails"
          title="Barcode/GTIN Exemption"
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <Checkbox
                label="Barcode/GTIN Exemption"
                checked={state.barCode}
                onChange={(e) => {
                  changeHandler(e, "barCode");
                }}
                // onChange={CheckBoxhandleChange}
                value={state.barCode}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          id="storeDetails"
          title="Add Amazon Category"
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                type="email"
                // label="Account email"
                onChange={(e) => {
                  changeHandler(e, "add_Amazon_Category");
                }}
                value={state.add_Amazon_Category}
                autoComplete="email"
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          id="storeDetails"
          title="Image Selection"
          description="Shopify and your customers will use this information to contact you."
        >
          <Card sectioned>
            <FormLayout>
              <RadioButton
                label="Accounts are disabled"
                helpText="Set product images as shown in Shopify"
                // checked={state.image_Selection}
                id="disabled"
                name="accounts"
                // onChange={handleChange}
                onChange={() => {
                  changeHandler("Accounts are disabled", "image_Selection");
                }}
              />
              <RadioButton
                label="Accounts are optional"
                helpText="set custom Amazon images"
                id="optional"
                name="accounts"
                // checked={state.image_Selection}
                // onChange={handleChange}
                onChange={() => {
                  changeHandler("Accounts are optional", "image_Selection");
                }}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
        <Button primary onClick={handleChange}>
          Submit
        </Button>
      </Layout>

      <div style={{ height: "500px" }}>
        <Modal
          //   activator={activator}
          open={active}
          onClose={handleChange}
          title="Form Data"
        >
          <Modal.Section>
            <TextContainer>
              <p>Title: {state.title}</p>
              <p>Description :{state.description}</p>
              <p>HandlingTime :{state.handlingTime}</p>
              <p>Amazon Parent Sku :{state.Amazon_Parent_Sku}</p>
              <p>BarCode :{state.barCode ? "yes" : "No"}</p>
              <p>Add Amazon Category :{state.add_Amazon_Category}</p>
              <p>Image Selection :{state.image_Selection}</p>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </div>
    </Page>
  );
}

export default Form;
