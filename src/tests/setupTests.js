// setup file
import DotEnv from 'dotenv';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

DotEnv.config({path:'.env.test'});
configure({ adapter: new Adapter() });