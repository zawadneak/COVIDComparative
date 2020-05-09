import React, { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import { parseISO, format } from 'date-fns';
import { Container, Holder } from './styles';
import api from '../../services/api';

import SortArray from '../../services/SortArray';

const App: React.FC = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [deaths, setDeaths] = useState<number[]>([]);
  const [backgroundData, setBackground] = useState<string[]>([]);

  const [covidDeaths, setCovidDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  const getData = async () => {
    const response = await api.get('/');
    setCovidDeaths(response.data.deaths.value);
    const formatted = parseISO(response.data.lastUpdate);
    setLastUpdate(format(formatted, 'dd/MM'));
  };

  const setValues = (deaths: number) => {
    const { labels: labelsAux, deaths: deathsAux } = SortArray(deaths);

    labelsAux.push('COVID-19');
    deathsAux.push(covidDeaths);

    setLabels(labelsAux);
    setDeaths(deathsAux);

    let i = 0;
    const backgroundAux = [];
    while (i < labelsAux.length - 1) {
      backgroundAux.push('rgba(201, 69, 30, 0.2)');
      i++;
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
        <Bar data={data} width={1200} height={600} />
        <p>
          It's not just another flu.
          <br />
          <br />
          If you can, stay at home,
          <br />
          If you can't, use a mask.
        </p>
      </Holder>
    </Container>
  );
};

export default App;
