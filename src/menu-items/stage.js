// assets
import { DatabaseOutlined } from '@ant-design/icons';

// icons
const icons = {
    DatabaseOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'stage',
    title: 'Finance',
    type: 'group',
    children: [
        {
            id: 'data-analysis',
            title: 'Data analysis',
            type: 'item',
            url: '/demo-page',
            icon: icons.DatabaseOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
