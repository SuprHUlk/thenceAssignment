import NavRegistration from "../components/NavRegistration";
import Congratulations from "../components/Congratulations";

const Success = () => {
  return (
    <>
      <NavRegistration disable={false} />
      <Congratulations />
    </>
  );
};

export default Success;
