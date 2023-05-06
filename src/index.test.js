import { fireEvent, getByText } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let container;

describe("index.html", () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("renders a heading element", () => {
    expect(container.querySelector("h1")).not.toBeNull();
    expect(getByText(container, "Pun Generator")).toBeInTheDocument();
  });

  it("renders a button element", () => {
    expect(container.querySelector("button")).not.toBeNull();
    expect(
      getByText(container, "Click me for a terrible pun")
    ).toBeInTheDocument();
  });

  it("renders a new paragraph via JavaScript when the button is clicked", async () => {
    const button = getByText(container, "Click me for a terrible pun");

    fireEvent.click(button);
    let generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(1);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(2);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(3);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(4);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(5);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(6);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(7);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(8);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(9);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(10);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(11);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(12);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(13);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(14);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(15);

    fireEvent.click(button);
    generatedParagraphs = container.querySelectorAll("#pun-container p");
    expect(generatedParagraphs.length).toBe(16);
  });
});
