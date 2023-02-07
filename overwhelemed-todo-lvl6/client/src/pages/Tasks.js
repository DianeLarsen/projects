import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
const myImage = new CloudinaryImage('sample', {cloudName: 'dqjh46sk5'}).resize(fill().width(100).height(150));

