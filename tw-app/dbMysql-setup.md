-- ****************** SqlDBM: Microsoft SQL Server ******************
-- ******************************************************************

DROP TABLE [dbo].[webScraping];
GO


DROP TABLE [dbo].[TvShow];
GO


DROP TABLE [dbo].[Movies];
GO


DROP TABLE [dbo].[userSubmissions];
GO


DROP TABLE [dbo].[Triggers];
GO


-- ************************************** [dbo].[Triggers]

CREATE TABLE [dbo].[Triggers]
(
 [id]           NUMERIC(18,0) NOT NULL ,
 [trigger_Name] STRING NOT NULL ,

 CONSTRAINT [PK_Triggers] PRIMARY KEY CLUSTERED ([id] ASC, [trigger_Name] ASC)
);
GO





-- ************************************** [dbo].[userSubmissions]

CREATE TABLE [dbo].[userSubmissions]
(
 [id]           NUMERIC(18,0) NOT NULL ,
 [userName]     SRTING NOT NULL ,
 [blurb]        STRING NOT NULL ,
 [id_1]         NUMERIC(18,0) NOT NULL ,
 [trigger_Name] STRING NOT NULL ,

 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED ([id] ASC, [userName] ASC, [blurb] ASC),
 CONSTRAINT [FK_44] FOREIGN KEY ([id_1], [trigger_Name])
  REFERENCES [dbo].[Triggers]([id], [trigger_Name])
);
GO


--SKIP Index: [fkIdx_44]




-- ************************************** [dbo].[TvShow]

CREATE TABLE [dbo].[TvShow]
(
 [id]                   NUMERIC(18,0) NOT NULL ,
 [show_Name]            STRING NOT NULL ,
 [show_Season]          NUMERIC(18,0) NOT NULL ,
 [episode_Name]         STRING NOT NULL ,
 [episode_Id]           NUMERIC(18,0) NOT NULL ,
 [id_1]                 NUMERIC(18,0) NOT NULL ,
 [trigger_Name]         STRING NOT NULL ,
 [id_1_1]               NUMERIC(18,0) NOT NULL ,
 [scraped_Data/trigger] STRING NOT NULL ,
 [id_1_1_1]             NUMERIC(18,0) NOT NULL ,
 [userName]             SRTING NOT NULL ,
 [blurb]                STRING NOT NULL ,

 CONSTRAINT [PK_TvShow] PRIMARY KEY CLUSTERED ([id] ASC, [show_Name] ASC, [show_Season] ASC, [episode_Name] ASC, [episode_Id] ASC),
 CONSTRAINT [FK_36] FOREIGN KEY ([id_1], [trigger_Name])
  REFERENCES [dbo].[Triggers]([id], [trigger_Name]),
 CONSTRAINT [FK_49] FOREIGN KEY ([id_1_1], [scraped_Data/trigger])
  REFERENCES [dbo].[webScraping]([id], [scraped_Data/trigger]),
 CONSTRAINT [FK_57] FOREIGN KEY ([id_1_1_1], [userName], [blurb])
  REFERENCES [dbo].[userSubmissions]([id], [userName], [blurb])
);
GO


--SKIP Index: [fkIdx_36]

--SKIP Index: [fkIdx_49]

--SKIP Index: [fkIdx_57]




-- ************************************** [dbo].[Movies]

CREATE TABLE [dbo].[Movies]
(
 [id]                   NUMERIC(18,0) NOT NULL ,
 [movie_Name]           STRING NOT NULL ,
 [id_1]                 NUMERIC(18,0) NOT NULL ,
 [trigger_Name]         STRING NOT NULL ,
 [id_1_1]               NUMERIC(18,0) NOT NULL ,
 [scraped_Data/trigger] STRING NOT NULL ,
 [id_1_1_1]             NUMERIC(18,0) NOT NULL ,
 [userName]             SRTING NOT NULL ,
 [blurb]                STRING NOT NULL ,

 CONSTRAINT [PK_Movies] PRIMARY KEY CLUSTERED ([id] ASC, [movie_Name] ASC),
 CONSTRAINT [FK_40] FOREIGN KEY ([id_1], [trigger_Name])
  REFERENCES [dbo].[Triggers]([id], [trigger_Name]),
 CONSTRAINT [FK_53] FOREIGN KEY ([id_1_1], [scraped_Data/trigger])
  REFERENCES [dbo].[webScraping]([id], [scraped_Data/trigger]),
 CONSTRAINT [FK_62] FOREIGN KEY ([id_1_1_1], [userName], [blurb])
  REFERENCES [dbo].[userSubmissions]([id], [userName], [blurb])
);
GO


--SKIP Index: [fkIdx_40]

--SKIP Index: [fkIdx_53]

--SKIP Index: [fkIdx_62]




-- ************************************** [dbo].[webScraping]

CREATE TABLE [dbo].[webScraping]
(
 [id]                   NUMERIC(18,0) NOT NULL ,
 [scraped_Data/trigger] STRING NOT NULL ,
 [id_1]                 NUMERIC(18,0) NOT NULL ,
 [trigger_Name]         STRING NOT NULL ,
 [id_1_1]               NUMERIC(18,0) NOT NULL ,
 [movie_Name]           STRING NOT NULL ,
 [id_1_1_1]             NUMERIC(18,0) NOT NULL ,
 [show_Name]            STRING NOT NULL ,
 [show_Season]          NUMERIC(18,0) NOT NULL ,
 [episode_Name]         STRING NOT NULL ,
 [episode_Id]           NUMERIC(18,0) NOT NULL ,

 CONSTRAINT [PK_webScraping] PRIMARY KEY CLUSTERED ([id] ASC, [scraped_Data/trigger] ASC),
 CONSTRAINT [FK_32] FOREIGN KEY ([id_1], [trigger_Name])
  REFERENCES [dbo].[Triggers]([id], [trigger_Name]),
 CONSTRAINT [FK_67] FOREIGN KEY ([id_1_1], [movie_Name])
  REFERENCES [dbo].[Movies]([id], [movie_Name]),
 CONSTRAINT [FK_71] FOREIGN KEY ([id_1_1_1], [show_Name], [show_Season], [episode_Name], [episode_Id])
  REFERENCES [dbo].[TvShow]([id], [show_Name], [show_Season], [episode_Name], [episode_Id])
);
GO


--SKIP Index: [fkIdx_32]

--SKIP Index: [fkIdx_67]

--SKIP Index: [fkIdx_71]




