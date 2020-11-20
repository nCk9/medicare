import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../App';

const PatientHistory = () => {
	const { state, dispatch } = useContext(UserContext);

	return (
		<div>
			<h3
				style={{ color: '#2196f3', textAlign: 'center', fontFamily: 'Goldman' }}
			>
				Previous Prescriptions
			</h3>
		</div>
	);
};

export default PatientHistory;
