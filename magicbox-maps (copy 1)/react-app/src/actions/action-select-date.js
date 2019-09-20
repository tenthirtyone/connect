import {fetchMobilityForDate} from '../helpers/helper-general'
/**
 * selectDate - Specifies the style for the geojson
 *
 * @param  {String} country
 * @param  {String} date description
 * @return {object} dispatch
 */
export const selectDate = function(country, date) {
  return function(dispatch) {
    dispatch({type: 'REQUEST_DATA'})

    fetchMobilityForDate(country, date)
      .then(data => {
        dispatch({
          type: 'DATE_SELECTED',
          payload: {
            date: date,
            mobility: data.data
          }
        })

        dispatch({type: 'RECEIVE_DATA'})
      })
  }
}
