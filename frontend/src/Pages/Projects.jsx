import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Progress,
} from "@chakra-ui/react";
import React from "react";
import project_page from "../module.css/projects.module.css";
import { Icon } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { SearchIcon, SmallAddIcon } from "@chakra-ui/icons";

const Projects = () => {
  return (
    <div>
      <div className={project_page.second_navbar_parent}>
        <div className={project_page.second_navbar}>
          <div className={project_page.second_navbar_left}>
            <button className={project_page.new_prj_btn}>
              <SmallAddIcon width={"20px"} height={"20px"} />
              New Project
            </button>
            <button className={project_page.imp_exp_btn}>Import</button>
            <button className={project_page.imp_exp_btn}>Export</button>
          </div>
          <div className={project_page.second_navbar_right}>
            <input
              className={project_page.inp_search}
              type="text"
              placeholder="Search by project or client"
            ></input>
          </div>
        </div>
      </div>
      <div className={project_page.project_table_box_parent}>
        <p className={project_page.project_heading}>Projects</p>
        <div>
          <div className={project_page.project_filter_main}>
            <div className={project_page.project_filter_left}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    background={"white"}
                    border="1px solid black"
                    height={"35px"}
                  >
                    Budgeted Projects (1)
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  width="250px"
                  className={project_page.project_filter_left_opt}
                >
                  <PopoverArrow />
                  <PopoverBody>
                    <p>Active Projects</p>
                    <p>Budgeted Projects</p>
                    <p>Archieved Projects</p>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
            <div className={project_page.project_filter_right}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    background={"white"}
                    border="1px solid black"
                    height={"35px"}
                    width={"auto"}
                  >
                    Filter By Client
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent width="250px">
                  <PopoverArrow />
                  <PopoverBody className={project_page.manager_fltr_con}>
                    <p>Active Projects</p>
                    <h3 className={project_page.client_filter_head}>
                      Active Clients
                    </h3>
                    <p>Budgeted Projects</p>
                    <p>Archieved Projects</p>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <Button
                    background={"white"}
                    border="1px solid black"
                    height={"35px"}
                    width={"auto"}
                  >
                    Filter By Manager
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent width="250px">
                  <PopoverArrow />
                  <PopoverBody className={project_page.manager_fltr_con}>
                    <p>All Managers</p>
                    <h3 className={project_page.client_filter_head}>
                      Active managers of project
                    </h3>
                    <p>Budgeted Projects</p>
                    <p>Archieved Projects</p>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className={project_page.table_div}>
            <table width={"90%"}>
              <thead className={project_page.prj_nm_thead}>
                <td>
                  <input className={project_page.input_box} type="checkbox" />
                </td>
                <td>Client</td>
                <td>Budget</td>
                <td>Spent</td>
                <td>Remaining</td>
                <td>Costs</td>
                <td width={"120px"}></td>
              </thead>
              <tbody>
                <tr className={project_page.prj_nm_tr}>
                  <td></td>
                  <td>Example client</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input className={project_page.input_box} type="checkbox" />
                  </td>
                  <td className={project_page.cl_name}>Example Project</td>
                  <td>50</td>
                  <td>
                    <div className={project_page.td_spent}>
                      5 <Progress value={5} />
                    </div>
                  </td>
                  <td>45</td>
                  <td>$0.00</td>
                  <td>
                    <Popover>
                      <PopoverTrigger>
                        <button
                          className={project_page.action_btn}
                          backgroundColor={"red"}
                          border={"1px solid black"}
                        >
                          Actions <Icon width={"40px"} as={IoIosArrowDown} />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent width="120px">
                        <PopoverArrow />
                        <PopoverBody className={project_page.actions_opt2}>
                          <p>Edit</p>
                          <p>Pin</p>
                          <p>Duplicate</p>
                          <hr className={project_page.act_hr}></hr>
                          <p>Archieve</p>
                          <p>Delete</p>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
