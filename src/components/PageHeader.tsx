import React from "react";
import { Link2, Unlock, ChevronDown, Plus } from "react-feather";
import { members } from "../data/users";
import { useTranslation } from "react-i18next";

const PageHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 p-6">
      <div className="w-full mb-4 lg:mb-0">
        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-auto">
          <nav className="text-lg text-gray-400 dark:text-gray-300 space-x-4 mb-2 text-left font-medium">
            <span>{t("workspace")}</span>
            <span>&gt;</span>
            <span>{t("creative")}</span>
            <span>&gt;</span>
            <span className="text-black dark:text-white font-semibold">
              {t("creativeWebsite")}
            </span>
          </nav>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 lg:mt-0">
            <p className="font-semibold text-black dark:text-white text-lg text-right">
              {t("from")} 23 April
            </p>
            <div className="flex items-center space-x-1">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-lg text-gray-400 dark:text-gray-300">
                {t("updated")} 12 min ago
              </span>
            </div>
          </div>
        </div>
        <h6 className="text-5xl font-bold text-left text-black dark:text-white">
          {t("websiteDesign")}
        </h6>
        <div className="flex flex-wrap items-center justify-between mt-4 space-y-2 lg:space-y-0">
          <div className="flex items-center mt-2 space-x-6">
            <div className="flex items-center text-black dark:text-white font-semibold space-x-3">
              <Unlock size={16} className="text-gray-400 dark:text-gray-300" />
              <span className="text-gray-900 dark:text-gray-200">
                {t("limitedAccess")}
              </span>
              <ChevronDown className="text-gray-400 dark:text-gray-300" />
            </div>

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-4"></div>

            <div className="flex items-center">
              {members.slice(0, 4).map((member, index) => (
                <img
                  key={member.id}
                  src={member.avatarUrl}
                  alt={`Member ${member.id}`}
                  className={`w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 ${
                    index !== 0 ? "-ml-2" : ""
                  }`}
                  style={{ zIndex: index }}
                />
              ))}
              <div className="flex z-10 items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-600 text-white font-medium border-2 border-white dark:border-gray-800 -ml-2">
                +2
              </div>
              <div className="flex items-center p-2 justify-center rounded-full bg-indigo-600 text-white ml-4">
                <Plus size={24} />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link2
              size={16}
              className="text-indigo-500 dark:text-indigo-300 mr-4"
            />

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-4"></div>

            <div className="p-3 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-700 bg-transparent">
              <div className="flex flex-col items-center justify-center space-y-0.5">
                <div className="w-4 h-1.5 rounded-sm border-gray-400 dark:border-gray-300 border"></div>
                <div className="w-4 h-1.5 rounded-sm border-gray-400 dark:border-gray-300 border"></div>
              </div>
            </div>
            <div className="p-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 focus:outline-none">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;