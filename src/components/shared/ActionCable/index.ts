import * as ActionCable from 'actioncable';

const cable = ActionCable.createConsumer(`${import.meta.env.VITE_DEV_WS_BASE}/cable`);
export default cable;