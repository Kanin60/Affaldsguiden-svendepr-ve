//convertere num_stars til stjerner

export function starconverter(stars) {
    let star;
    switch (stars) {
        case 1:
            star = "★☆☆☆☆";
            break;
        case 2:
            star = "★★☆☆☆";
            break;
        case 3:
            star = "★★★☆☆";
            break;
        case 4:
            star = "★★★★☆";
            break;
        case 5:
            star = "★★★★★";
            break;
    }
    return star;
}