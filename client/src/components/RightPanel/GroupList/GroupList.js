import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import { Dropdown, Card, Flex, Avatar, Text } from "@fluentui/react-northstar";
import { TeamCreateIcon } from "@fluentui/react-icons-northstar";
import axios from "axios";

import useStyles from "./styles";
import AddGroupDialog from "./AddGroupDialog";

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
  const [groups, setGroups] = useState([]);
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState(false);

  useEffect(() => {
    axios
      .get("api/groups")
      .then((res) => res.data)
      .then((data) => setGroups(data))
      .catch((err) => console.log(err));
  }, []);

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
                <TeamCreateIcon size="large" color="teal" />
              </Card.Body>
            </Flex>
          </Card>
          {groups.map((g, i) => (
            <Card key={i} className={classes.groupCard}>
              <Card.Body fitted>
                <Flex gap="gap.small">
                  <Flex column gap="gap.small">
                    <Avatar
                      className={classes.avatar}
                      image={g.avatar}
                      name={g.name}
                    />
                  </Flex>
                  <Flex column gap="gap.small" styles={{ overflow: "hidden" }}>
                    <Text
                      content={g.name}
                      size="small"
                      weight="bold"
                      truncated
                      title={g.name}
                    />
                    <Text
                      content={`${g.memberCount} thành viên`}
                      size="small"
                      weight="light"
                    />
                  </Flex>
                </Flex>
              </Card.Body>
            </Card>
          ))}
        </Flex>
      </div>
      <AddGroupDialog
        open={openAddGroupDialog}
        onClose={() => setOpenAddGroupDialog(false)}
        onCreateSuccess={(group) => setGroups([group, ...groups])}
      />
    </div>
  );
}

export default GroupList;
