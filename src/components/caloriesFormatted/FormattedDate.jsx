function FormattedDate(props){
    // Format the date as "day - month - year"
    const stringDay = { day: 'numeric'};
    const stringMonth = { month: 'numeric'};
    const stringYear = { year: 'numeric'};
    const dateDay = props.date.toLocaleDateString('en-UK', stringDay);
    const dateMonth = props.date.toLocaleDateString('en-UK', stringMonth);
    const dateYear = props.date.toLocaleDateString('en-UK', stringYear);
    return(
        <>
            {dateDay} -- {dateMonth} -- {dateYear}
        </>
    );
}

export default FormattedDate;