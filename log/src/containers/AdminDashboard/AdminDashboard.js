/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import AdminTable from '../Table/AdminTable';
import i18nStrings from '../../constants/i18Strings';
import { Alert } from 'antd';
import {
    addReleaseData,
    versionName,
    getReleaseStartDate,
    getReleaseEndDate
} from '../../store/actions/VersionsActions';
import SearchBar from '../../components/TableComponents/SearchBar';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateEligible: true,
            isInvalidDate: false,
            isEdit: false,
            releaseIndex: 0,
            filterText: '',
            releases: [
                {
                    id: 1,
                    description: 'capsules user',
                    startDate: '23/08/2009',
                    endDate: '09/07/2020',
                    versionStatus: 'IN PROGRESS',
                    tasklastName: 'fghjk',
                    versionName: 'version 1.0'
                },
                {
                    id: 2,
                    description: 'history user',
                    startDate: '23/08/2009',
                    endDate: '09/07/2020',
                    versionStatus: 'IN PROGRESS ',
                    tasklastName: 'fghjk',
                    versionName: 'version 2.0'
                },
                {
                    id: 3,
                    description: 'roadster user',
                    startDate: '23/08/2009',
                    endDate: '09/07/2020',
                    versionStatus: 'IN PROGRESS ',
                    tasklastName: 'fghjk',
                    versionName: 'version 2.0.1'
                },
                {
                    id: 4,
                    description: 'rockets user',
                    startDate: '23/08/2009',
                    endDate: '09/07/2020',
                    versionStatus: 'IN PROGRESS ',
                    tasklastName: 'fghjk',
                    versionName: 'version 1.0.1'
                },
                {
                    id: 5,
                    description: 'capsules user',
                    startDate: '23/08/2009',
                    endDate: '09/07/2020',
                    versionStatus: 'IN PROGRESS ',
                    tasklastName: 'fghjk',
                    versionName: 'version 3.0.9'
                },
                {
                    id: 6,
                    description: 'capsules user',
                    startDate: '23/08/2009',
                    endDate: '09/07/2020',
                    versionStatus: 'IN PROGRESS',
                    tasklastName: 'fghjk',
                    versionName: 'version 4.0'
                }
            ]
        };
    }
    handleUserInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    handleRowDel(product) {
        var index = this.state.releases.indexOf(product);
        this.state.releases.splice(index, 1);
        this.setState(this.state.releases);
    }

    handleAddEvent(evt) {
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(
            36
        );
        var product = {
            id: id,
            versionName: '',
            versionStatus: '',
            description: '',
            tasklastName: '',
            startDate: ' ',
            endDate: ' '
        };
        this.state.releases.push(product);
        this.setState(this.state.releases);
    }

    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        this.props.addReleaseData(evt.target.name, evt.target.value);
        if (evt.target.name === 'startDate') {
            if (
                moment(evt.target.value, 'DD/MM/YYYY', true).isValid() == true
            ) {
                this.props.getReleaseStartDate(evt.target.value);

                this.setState({
                    isInvalidDate: false
                });

                if (
                    moment(evt.target.value, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    ) >
                    moment(this.props.addVersions.endDate, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    )
                ) {
                    this.setState({
                        isDateEligible: false
                    });
                } else if (
                    moment(evt.target.value, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    ) <
                    moment(this.props.addVersions.endDate, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    )
                ) {
                    this.setState({
                        isDateEligible: true
                    });
                } else {
                    this.setState({
                        isDateEligible: false
                    });
                }
            } else {
                // alert(
                //     'invalid date format is being entered.Please correct it!'
                // );
                this.setState({
                    isInvalidDate: true,
                    isDateEligible: true
                });
            }
        }
        if (evt.target.name === 'endDate') {
            if (
                moment(evt.target.value, 'DD/MM/YYYY', true).isValid() == true
            ) {
                this.props.getReleaseEndDate(evt.target.value);

                this.setState({
                    isInvalidDate: false
                });

                if (
                    moment(evt.target.value, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    ) >
                    moment(
                        this.props.addVersions.startDate,
                        'DD/MM/YYYY'
                    ).format('YYYY-MM-DD')
                ) {
                    this.setState({
                        isDateEligible: true
                    });
                } else if (
                    moment(evt.target.value, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    ) <
                    moment(
                        this.props.addVersions.startDate,
                        'DD/MM/YYYY'
                    ).format('YYYY-MM-DD')
                ) {
                    this.setState({
                        isDateEligible: false
                    });
                } else {
                    this.setState({
                        isDateEligible: false
                    });
                }
            } else {
                // alert(
                //     'invalid date format is being entered.Please correct it!'
                // );
                this.setState({
                    isInvalidDate: true,
                    isDateEligible: true
                });
            }
        }
        var releases = this.state.releases.slice();
        var newReleases = releases.map(function(release) {
            for (var key in release) {
                if (key == item.name && release.id == item.id) {
                    release[key] = item.value;
                }
            }
            return release;
        });
        this.setState({ releases: newReleases });
    }
    onEdit(product) {
        var index = this.state.releases.indexOf(product);
        this.setState({
            releaseIndex: index,
            isEdit: !this.state.isEdit
        });
    }
    render() {
        const { isInvalidDate, isDateEligible } = this.state;
        return (
            <div>
                <h1 style={{ color: 'black' }}>{i18nStrings.heading}</h1>
                {isInvalidDate ? (
                    <Alert
                        style={{ margin: '10px' }}
                        message='Invalid date format!'
                        type='error'
                    />
                ) : isDateEligible ? null : (
                    <Alert
                        style={{ margin: '10px' }}
                        message='The start date should be lesser than end date! or  The end date should be greater than the start date! Kindly edit the Date accordingly until this error escapes'
                        type='error'
                    />
                )}
                <SearchBar
                    style={{ margin: '10px' }}
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput.bind(this)}
                />
                <AdminTable
                    onProductTableUpdate={this.handleProductTable.bind(this)}
                    onRowAdd={this.handleAddEvent.bind(this)}
                    onRowDel={this.handleRowDel.bind(this)}
                    releases={this.state.releases}
                    filterText={this.state.filterText}
                    onEdit={this.onEdit.bind(this)}
                    isEdit={this.state.isEdit}
                    releaseIndex={this.state.releaseIndex}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        addVersions: state.addVersions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addReleaseData: (key, value) => dispatch(addReleaseData(key, value)),
        versionName: name => dispatch(versionName(name)),
        getReleaseStartDate: startDate =>
            dispatch(getReleaseStartDate(startDate)),
        getReleaseEndDate: endDate => dispatch(getReleaseEndDate(endDate))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminDashboard);
