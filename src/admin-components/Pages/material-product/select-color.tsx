import * as React from "react";
import styled from "@emotion/styled";
import { Box, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const names = [
  "Purple",
  "Black",
  "Red",
  "Orange",
  "Navy",
  "White",
  "Broom",
  "Green",
  "Yellow",
  "Grey",
  "Pink",
  "Blue",
];

interface UserCardProps {
  handleChangeColor: (userId: string | object) => void;
}

function SelectColorProduct({ handleChangeColor }: UserCardProps) {
  const [colorName, setColorName] = useState<{ name: string }[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof colorName>) => {
    setColorName((oldItem) => [
      ...oldItem,
      {
        name: String(event.target.value),
      },
    ]);

    console.log(colorName);

    handleChangeColor(colorName);
  };
  return (
    <ColorsWrapper>
      <label className="select">
        <select onChange={handleChange}>
          {names.map((name, index) => (
            <option value={name} key={index}>
              {name}
            </option>
          ))}

          <option value="1">Pure CSS Select</option>
          <option value="2">With wrapper</option>
          <option value="3">No JS!</option>
        </select>
      </label>

      <Box>
        <ul>
          {colorName.map((item, index) => {
            return (
              <li key={index} style={{ color: "white" }}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </Box>
    </ColorsWrapper>
  );
}

export default SelectColorProduct;

const ColorsWrapper = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    outline: 0;
    background: none;
    color: inherit;
    box-shadow: none;
  }

  select::-ms-expand {
    display: none;
  }

  /* Custom Select wrapper */
  .select {
    position: relative;
    display: flex;
    width: 100%;
    background: var(--background-select);
    border-radius: 0.25rem;
    overflow: hidden;
  }
  .select select {
    flex: 1;
    padding: 1em;
    cursor: pointer;
  }
  .select::after {
    content: "▼";
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: 0.25s all ease;
    pointer-events: none;
  }
  .select:hover::after {
    color: #f39c12;
    -webkit-animation: bounce 0.5s infinite;
    animation: bounce 0.5s infinite;
  }

  @-webkit-keyframes bounce {
    25% {
      transform: translatey(5px);
    }
    75% {
      transform: translatey(-5px);
    }
  }

  @keyframes bounce {
    25% {
      transform: translatey(5px);
    }
    75% {
      transform: translatey(-5px);
    }
  }
`;
