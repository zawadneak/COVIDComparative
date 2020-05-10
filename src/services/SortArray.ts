import { produce } from 'immer';
import data from '../data/deathsAPI';

type ArrayProps = Array<DataProps>;

export interface DataProps {
  name: string;
  deaths: number;
  formattedDeaths?: string;
  source?: string;
}

const SortArray = (deaths: number) => {
  const labelAux: Array<string> = [];
  const deathAux: Array<number> = [];
  const list = produce(data, (draft: ArrayProps) => {
    const array = draft.filter(function (item: DataProps) {
      if (item.deaths <= deaths) {
        return true;
      }
      return false;
    });
    array.sort((a, b) => {
      if (a.deaths >= b.deaths) {
        return 1;
      }
      return -1;
    });
    while (array.length > 8) {
      array.shift();
    }
    return array;
  });
  list.forEach((item) => {
    labelAux.push(item.name);
    deathAux.push(item.deaths);
  });

  const sortedList = data.sort((a, b) => {
    if (a.deaths >= b.deaths) {
      return 1;
    }
    return -1;
  });

  return {
    list: sortedList,
    labels: labelAux,
    deaths: deathAux,
  };
};

export default SortArray;
