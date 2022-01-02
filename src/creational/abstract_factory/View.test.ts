import DarkThemeFactory from "./DarkThemeFactory";
import LightThemeFactory from "./LigthThemeFactory";
import View from "./View";

test("Deve criar um view com tema claro", () => {
  const view = new View(new LightThemeFactory());
  expect(view.label.color).toBe("black");
  expect(view.button.color).toBe("white");
  expect(view.button.backGroundColor).toBe("blue");
});

test("Deve criar um view com tema escuro", () => {
  const view = new View(new DarkThemeFactory());
  expect(view.label.color).toBe("white");
  expect(view.button.color).toBe("white");
  expect(view.button.backGroundColor).toBe("black");
});
