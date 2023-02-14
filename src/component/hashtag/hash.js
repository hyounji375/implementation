import { Frame, Text } from "./hashStyle";

const HashFrame = ({ children }) => {
  return (
    <Frame>
      <Text>
        <p>#&nbsp;</p>
        <span> {children}</span>
      </Text>
    </Frame>
  );
};
export default HashFrame;
