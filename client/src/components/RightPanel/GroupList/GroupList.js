import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { Dropdown, Card, Flex } from "@fluentui/react-northstar";
import { TeamCreateIcon } from "@fluentui/react-icons-northstar";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";
import AddGroupDialog from "./AddGroupDialog";
import GroupCard from "./GroupCard";
import { addGroup } from "../../../_actions/groupActions";

const FILTERS = {
  ALL: "Tất cả",
  MANAGING: "Nhóm tôi đang quản lý",
};
const SORT_BY = {
  NAME_ASC: "Theo tên nhóm (A-Z)",
  NAME_DESC: "Theo tên nhóm (Z-A)",
  ACTIVITY_DESC: "Theo hoạt động gần đây (Mới -> Cũ)",
  ACTIVITY_ASC: "Theo hoạt động gần đây (Cũ -> Mới)",
};

const filters = [FILTERS.ALL, FILTERS.MANAGING];
const sorters = [
  SORT_BY.NAME_ASC,
  SORT_BY.NAME_DESC,
  SORT_BY.ACTIVITY_DESC,
  SORT_BY.ACTIVITY_ASC,
];

function GroupList(props) {
  const isSmall = !useMediaQuery("(min-width:740px)");
  const classes = useStyles(isSmall)(props);
  const [selectedFilter, setSelectedFilter] = useState(FILTERS.ALL);
  const [selectedSorter, setSorter] = useState(SORT_BY.NAME_ASC);
  const groups = useSelector((store) => store.group);
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={classes.groupList}>
      <div className={classes.controlsContainer}>
        <div className={classes.filter}>
          <Dropdown
            items={filters}
            checkable
            defaultValue={selectedFilter}
            fluid
            onChange={(e, data) => setSelectedFilter(data.value)}
          />
        </div>
        <div className={classes.sorter}>
          <Dropdown
            items={sorters}
            checkable
            align="end"
            defaultValue={selectedSorter}
            fluid
            onChange={(e, data) => setSorter(data.value)}
          />
        </div>
      </div>
      <div>
        <Flex gap="gap.medium" wrap>
          <Card
            className={classes.addCard}
            title="Thêm nhóm mới"
            styles={{ color: "teal", height: "62.4px", borderColor: "teal" }}
            onClick={() => setOpenAddGroupDialog(true)}
          >
            <Flex hAlign="center" vAlign="center" fill>
              <Card.Body fitted>
                <TeamCreateIcon size="largest" color="teal" />
              </Card.Body>
            </Flex>
          </Card>
          {groups && groups.map((g, i) => <GroupCard key={i} group={g} />)}
        </Flex>
      </div>
      <AddGroupDialog
        open={openAddGroupDialog}
        onClose={() => setOpenAddGroupDialog(false)}
        onCreateSuccess={(group) => dispatch(addGroup(group))}
      />
    </div>
  );
}

export default GroupList;
