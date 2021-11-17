import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import CategoryTree from './CategoryTree';

const sidebarWidth = 300;

export default function Sidebar({ fetchProducts }) {

    function selectCateory(id, name) {
        fetchProducts(id, name);
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: sidebarWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: sidebarWidth, boxSizing: 'border-box', p: 2 }
            }}
        >
            <Toolbar />
            <CategoryTree categoryId="cat00000" selectCateory={selectCateory} />
        </Drawer>
    )
}
