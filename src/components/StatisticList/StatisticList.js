import React from 'react';
import PropTypes from 'prop-types';

import { StatisticListStyled } from './StatisticList.styles';
import { StatisticItem } from '../StatisticItem/StatisticItem';

export const StatisticList = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <StatisticListStyled>
            <StatisticItem key="good" label="good" value={good} />
            <StatisticItem key="neutral" label="neutral" value={neutral} />
            <StatisticItem key="bad" label="bad" value={bad} />

            <StatisticItem key="total" label="total" value={total} />

            <StatisticItem
                key="positivePercentage"
                label="positive feedback"
                value={positivePercentage}
            />
        </StatisticListStyled>
    );
};

StatisticList.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};
