import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import ServiceForMeeItem from './ServiceForMeeItem';
import { getAllServices } from '../servicesSlice/servicesSlice';
import './ServicesForMeeList.css';

function ServicesForMeeList(): JSX.Element {
  const { myServices } = useSelector((store: RootState) => store.allServices);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllServices());
  }, []);
  return (
    <div className="serviceItems-container-all">
      {myServices.map((service) => (
        <ServiceForMeeItem key={service.id} service={service} />
      ))}
    </div>
  );
}

export default ServicesForMeeList;
