const getCroppedImageUrl = (url: string) => {
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;


// NOTES:
    // this particular API supports cropping images on the fly as long as you pass 'crop' followed by dimensions into the URL