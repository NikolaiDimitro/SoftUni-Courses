function foreignLanguages(country) {

    let language = '';

    if (country === 'England' || country === 'USA') {

        language = 'English';

    } else if (country === 'Spain' || country === 'Argentina' || country === 'Mexico') {

        language = 'Spanish';

    } else {

        language = 'unknown';

    }

    console.log(language);

}
foreignLanguages('USA');
foreignLanguages('Germany');