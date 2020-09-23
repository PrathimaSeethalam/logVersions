/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminRow from './AdminRow';
import Constants from '../../constants/Constants';
import {
    addReleaseData,
    versionName,
    getReleaseStartDate,
    getReleaseEndDate
} from '../../store/actions/VersionsActions';

class AdminTable extends Component {
    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var release = this.props.releases.map(function(release, i) {
            if (release.versionName.indexOf(filterText) === -1) {
                return;
            }
            //integrate redux here

            return (
                <AdminRow
                    onProductTableUpdate={onProductTableUpdate}
                    product={release}
                    onDelEvent={rowDel}
                    key={release.id}
                    index={i}
                />
            );
        });
        return (
            <div>
                <div>
                    {/* <Button
                        type='button'
                        onClick={this.props.onRowAdd}
                        className='btn btn-success pull-right'
                        buttonname={'Add releases'}
                    ></Button> */}

                    <table
                        className='table table-bordered'
                        style={{ marginTop: '30px' }}
                    >
                        <thead>
                            <tr>
                                <th> {Constants.versionName}</th>
                                <th>{Constants.status}</th>
                                <th>{Constants.progress}</th>
                                <th>{Constants.desc}</th>
                                <th> {Constants.start_date}</th>
                                <th>{Constants.end_date}</th>
                                <th>{Constants.action}</th>
                            </tr>
                        </thead>
                        <tbody>{release}</tbody>
                    </table>
                </div>
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
)(AdminTable);
