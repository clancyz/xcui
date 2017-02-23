/**
 * @file index.js
 */
import Datepicker from './datepicker';
import DateRangePicker from './daterangepicker';
import Input from './input';
import InputNumber from './inputNumber';
import Textarea from './textarea';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Loading from './loading';
import Message from './message';
import Modal from './modal';
import PageLoading from './pageloading';
import Pagination from './pagination';
import Popover from './popover';
import Progress from './progress';
import Select from './select';
import Suggestion from './suggestion';
import Tag from './tag';
import Tooltip from './tooltip';
import ScrollTop from './scrolltop';
import {Button, ButtonGroup} from './button';
import {Row, Col} from './layout';
import Icon from './icon';

import xcuiInstall from './install.js';

require('../less/index.less');

const install = (Vue) => {
    if (install.installed) {
        return;
    }
    Vue.component(Datepicker.name, Datepicker);
    Vue.component(DateRangePicker.name, DateRangePicker);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(Loading.name, Loading);
    Vue.component(Message.name, Message);
    Vue.component(Modal.name, Modal);
    Vue.component(PageLoading.name, PageLoading);
    Vue.component(Pagination.name, Pagination);
    Vue.component(Popover.name, Popover);
    Vue.component(Progress.name, Progress);
    Vue.component(Select.name, Select);
    Vue.component(Suggestion.name, Suggestion);
    Vue.component(Tag.name, Tag);
    Vue.component(Tooltip.name, Tooltip);
    Vue.component(ScrollTop.name, ScrollTop);
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Icon.name, Icon);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.component(Input.name, Input);
    Vue.component(Textarea.name, Textarea);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
    Vue.use(xcuiInstall);
};

const xcui = {
    version: '1.0.0-alpha',
    Datepicker,
    DateRangePicker,
    InputNumber,
    Loading,
    Message,
    Modal,
    PageLoading,
    Pagination,
    Popover,
    Progress,
    Select,
    Suggestion,
    Tag,
    Tooltip,
    ScrollTop,
    install,
    xcuiInstall
};

module.exports = xcui;
