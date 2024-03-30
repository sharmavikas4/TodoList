import store from "./store";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
const ProviderComponent = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
ProviderComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProviderComponent;
