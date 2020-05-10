import React, { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import { parseISO, format } from 'date-fns';
import { Container, Holder, APIList } from './styles';
import api from '../../services/api';

import SortArray, { DataProps } from '../../services/SortArray';

const App: React.FC = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [deaths, setDeaths] = useState<number[]>([]);
  const [backgroundData, setBackground] = useState<string[]>([]);

  const [disasterList, setList] = useState<DataProps[]>([]);

  const [covidDeaths, setCovidDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  const getData = async () => {
    const response = await api.get('/');
    setCovidDeaths(response.data.deaths.value);
    const formatted = parseISO(response.data.lastUpdate);
    setLastUpdate(format(formatted, 'dd/MM'));
  };

  const setValues = (covidCasualties: number) => {
    const { labels: labelsAux, deaths: deathsAux, list } = SortArray(
      covidCasualties,
    );

    setList(list);

    setLabels(labelsAux);
    setDeaths(deathsAux);

    let i = 0;
    const backgroundAux = [];
    while (i < labelsAux.length - 1) {
      backgroundAux.push('rgba(201, 69, 30, 0.2)');
      i += 1;
    }
    backgroundAux.push('rgba(156, 36, 0, 0.8)');
    setBackground(backgroundAux);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setValues(covidDeaths);
  }, [covidDeaths]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Deaths',
        backgroundColor: backgroundData,
        borderColor: 'rgba(201, 69, 30, 0.2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,0,0,0.2)',
        hoverBorderColor: 'rgba(0,0,0,0.2)',
        data: deaths,
      },
    ],
  };
  return (
    <Container>
      <Holder>
        <img
          src={require('../../assets/img/logo.svg')}
          alt="COVID-19 Comparative"
        />
        <strong>{`Last updated: ${lastUpdate}`}</strong>
        <Bar data={data} width={1200} height={800} />
        <p>
          It's not just another flu.
          <br />
          <br />
          If you can, stay at home,
          <br />
          If you can't, use a mask.
        </p>
        <APIList>
          {disasterList.map((item) => (
            <a href={item.source}>
              <div>
                <text>{`${item.name} - ${item.formattedDeaths} †`}</text>
              </div>
            </a>
          ))}
        </APIList>
        <a href="https://lucascassilha.xyz">Lucas Zawadneak - 2020</a>
      </Holder>
    </Container>
  );
};

export default App;
