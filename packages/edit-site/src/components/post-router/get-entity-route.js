/**
 * Internal dependencies
 */
import { BASE_ENTITY_ROUTE } from './constants';

export default function getEntityRoute( contextType, identifier ) {
	if ( contextType === 'content' ) {
		return `${ BASE_ENTITY_ROUTE }&contextType=${ contextType }&content=${ identifier }`;
	}
	return `${ BASE_ENTITY_ROUTE }&contextType=${ contextType }&id=${ identifier }`;
}