import { Frame, Text } from "./hashStyle";

const HashFrame = ({ children, style }) => {
  return (
    <Frame style={style}>
      <Text>
        <p>#&nbsp;</p>
        <span> {children}</span>
      </Text>
    </Frame>
  );
};
export default HashFrame;
