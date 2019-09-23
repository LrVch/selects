import * as actionsTypes from '../actions';

const initialState = {
  sectionsToReset: [],
  tables: {
    'ti1': {
      id: 'ti1',
      items: [
        {
          key: 'None',
          text: 'No selected',
          value: 'None',
        },
        {
          key: '1',
          text: '1',
          value: '1'
        },
        {
          key: '2',
          text: '2',
          value: '2'
        },
        {
          key: '3',
          text: '3',
          value: '3'
        }
      ],
      selected: '',
      childTableId: 'ti2'
    },
    'ti2': {
      id: 'ti2',
      items: [
        {
          key: 'None',
          text: 'No selected',
          value: 'None',
        },
        {
          key: 'a',
          text: 'a',
          value: '1',
          parentid: '1'
        },
        {
          key: 'b',
          text: 'b',
          value: '2',
          parentid: '1'
        },
        {
          key: 'c',
          text: 'c',
          value: '3',
          parentid: '1'
        },
        {
          key: 'd',
          text: 'd',
          value: '4',
          parentid: '2'
        },
        {
          key: 'e',
          text: 'e',
          value: '5',
          parentid: '2'
        },
        {
          key: 'f',
          text: 'f',
          value: '6',
          parentid: '2'
        },
        {
          key: 'g',
          text: 'g',
          value: '7',
          parentid: '3'
        },
        {
          key: 'h',
          text: 'h',
          value: '8',
          parentid: '3'
        },
        {
          key: 'i',
          text: 'i',
          value: '9',
          parentid: '3'
        },
      ],
      selected: '',
      parentTableId: 'ti1',
      childTableId: 'ti3'
    },
    'ti3': {
      id: 'ti3',
      parentTableId: 'ti2',
      selected: '',
      items: [
        {
          key: 'None',
          text: 'No selected',
          value: 'None',
        },
        {
          key: 'A',
          text: 'A',
          value: '1',
          parentid: '1'
        },
        {
          key: 'B',
          text: 'B',
          value: '2',
          parentid: '1'
        },
        {
          key: 'C',
          text: 'C',
          value: '3',
          parentid: '1'
        },
        {
          key: 'D',
          text: 'D',
          value: '4',
          parentid: '2'
        },
        {
          key: 'E',
          text: 'E',
          value: '5',
          parentid: '2'
        },
        {
          key: 'F',
          text: 'F',
          value: '6',
          parentid: '2'
        },
        {
          key: 'G',
          text: 'G',
          value: '7',
          parentid: '3'
        },
        {
          key: 'H',
          text: 'H',
          value: '8',
          parentid: '3'
        },
        {
          key: 'I',
          text: 'I',
          value: '9',
          parentid: '3'
        },
        {
          key: 'J',
          text: 'J',
          value: '10',
          parentid: '4'
        },
        {
          key: 'K',
          text: 'K',
          value: '11',
          parentid: '4'
        },
        {
          key: 'L',
          text: 'L',
          value: '12',
          parentid: '4'
        },
        {
          key: 'M',
          text: 'M',
          value: '13',
          parentid: '5'
        },
        {
          key: 'N',
          text: 'N',
          value: '14',
          parentid: '5'
        },
        {
          key: 'O',
          text: 'O',
          value: '15',
          parentid: '5'
        },
        {
          key: 'P',
          text: 'P',
          value: '16',
          parentid: '6'
        },
        {
          key: 'R',
          text: 'R',
          value: '17',
          parentid: '6'
        },
        {
          key: 'S',
          text: 'S',
          value: '18',
          parentid: '6'
        },
        {
          key: 'T',
          text: 'T',
          value: '19',
          parentid: '7'
        },
        {
          key: 'U',
          text: 'U',
          value: '20',
          parentid: '7'
        },
        {
          key: 'W',
          text: 'W',
          value: '21',
          parentid: '7'
        },
        {
          key: 'X',
          text: 'X',
          value: '22',
          parentid: '8'
        },
        {
          key: 'Y',
          text: 'Y',
          value: '23',
          parentid: '8'
        },
        {
          key: 'Z',
          text: 'Z',
          value: '24',
          parentid: '8'
        },
        {
          key: 'XX',
          text: 'XX',
          value: '25',
          parentid: '9'
        },
        {
          key: 'YY',
          text: 'YY',
          value: '26',
          parentid: '9'
        },
        {
          key: 'ZZ',
          text: 'ZZ',
          value: '27',
          parentid: '9'
        },
      ]
    }
  }
}

let children = []

const getChild = (obj, id) => {
  const target = obj[id]
  const childId = target.childTableId

  if (childId) {
    children.push(childId)
    getChild(obj, childId) 
  }
}

const selectsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.SELECT_SET_SELECTED: {
      const { value, tableId } = payload

      children = []
      getChild(state.tables, tableId)
      const newTables = { ...state.tables }
      children.forEach((key) => {
        newTables[key].selected = ''
      })
      return {
        ...state,
        sectionsToReset: children,
        tables: { ...newTables, [tableId]: { ...state.tables[tableId], selected: value } }
      }
    }

    default:
      return state
  }
}

export default selectsReducer