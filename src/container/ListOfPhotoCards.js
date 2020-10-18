import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
//Query con renderizado tipo hoc
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)