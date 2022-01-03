import InputText from "./InputText";
import Label from "./Label";

test("Deve escrever no input e exibir os dados atualizados na label", () => {
  const input = new InputText("country");
  const label = new Label("País: {{country}}");
  input.register(label);
  input.setValue("Brasil");
  expect(label.value).toBe("País: Brasil");
  input.setValue("Argentina");
  expect(label.value).toBe("País: Argentina");
});
