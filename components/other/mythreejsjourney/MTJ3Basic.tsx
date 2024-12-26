import { Box, List, ListItemButton, ListItemText } from "@mui/material"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface MTJ3BasicProps {
  title: string
  code: string
}

const MTJ3Basic: React.FC<MTJ3BasicProps> = ({ title, code: fileContent }) => {
  return (
    <>
      <p>MTJ3Basic</p>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box>
          <List sx={{}}>
            <ListItemButton>
              <ListItemText primary={title} />
            </ListItemButton>
          </List>
        </Box>
        <SyntaxHighlighter style={vs2015}>{fileContent}</SyntaxHighlighter>
      </Box>
    </>
  )
}

export default MTJ3Basic
