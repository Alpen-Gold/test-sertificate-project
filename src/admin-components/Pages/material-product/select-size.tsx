import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
function getStyles(name: string, sizeName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      sizeName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectSizeProduct({
  setItemForm,
}: SelectSizeProductProps) {
  const theme = useTheme();
  const [sizeName, setSizeName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof sizeName>) => {
    const {
      target: { value },
    } = event;

    setSizeName(typeof value === "string" ? value.split(",") : value);

    console.log(sizeName);

    setItemForm((e: object) => ({
      ...e,
      size: [
        sizeName.map((item: string) => {
          return { name: item };
        }),
      ],
    }));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label" sx={{ color: "white" }}>
          Size
        </InputLabel>
        <Select
          sx={{ color: "white" }}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={sizeName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
                color: "white",
              }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, sizeName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
