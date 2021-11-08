import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@mui/styles';

function ProductImageGallery({ images }) {
    const styles = useStyles();

    const imgs = (images) => {
        return images.map(img => ({
            original: img.href,
            thumbnail: img.href
        }))
    }
    return (
        <div className={styles.gallery}>
            {images && <ImageGallery items={imgs(images)} showPlayButton={false} />}
        </div>
    )
}

export default ProductImageGallery;

const useStyles = makeStyles({
    gallery: {
        width: '45%',
        '& .image-gallery-image': {
            height: 300
        }
    }
})