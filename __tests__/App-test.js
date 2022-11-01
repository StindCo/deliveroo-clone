import React from "react";
import renderer from "react-test-renderer";
import CategoryCard from "../components/CategoryCard";

describe("<CategoryCard />", () => {
  it("has 2 children", () => {
    const tree = renderer
      .create(<CategoryCard imgUrl={"a"} title={"sksk"} />)
      .toJSON();

    expect(tree.children.length).toBe(2);
  });
});
