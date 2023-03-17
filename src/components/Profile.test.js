import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from './Profile';

describe('Profile Page', () => {
  it('should render correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
